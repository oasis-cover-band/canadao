import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-page-delegation-chart-element',
  templateUrl: './user-page-delegation-chart-element.component.html',
  styleUrls: ['./user-page-delegation-chart-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageDelegationChartElementComponent implements OnInit {
  @Input() user!: User;
  
  options: any;

  data: any = [];
  links: any = [];
  delegations: any = {};

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit(
  ): void {
    this.data = [{
      name: this.user.name
    }];

    this.checkDelegates(this.delegations, this.user).then(after => {
      const userLinks = this.links.filter((link: any) => {
        return link.target === this.user.name;
      });
      let userLinkValue = 0;
  
      for(let index = 0; index < userLinks.length; index++) {
        userLinkValue += userLinks[index].value;
      }
  
      const delegatesTo = this.dataService.getUser(this.user.delegatedToId)?.name;
      this.data.push({name: this.user.delegatedToId === '' ? this.user.name + `'s Voting Power` : 'Delegated To ' + delegatesTo});
      this.links.push({
        source: this.user.name,
        target: this.user.delegatedToId === '' ? this.user.name + `'s Voting Power` : 'Delegated To ' + delegatesTo,
        value: userLinkValue + 1
      });
      this.options = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'sankey',
            data: this.data,
            links: this.links,
            emphasis: {
              focus: 'adjacency'
            },
            lineStyle: {
              color: 'gradient',
              curveness: 0.5
            }
          }
        ]
      };
      this.cdr.markForCheck();
    });
    
  }

  async checkDelegates(delegations: any, user: User): Promise<void> {
    delegations[user.name] = {};
    for(let index = 0; index < user.delegatedFromIds.length; index++) {
      var temp = this.dataService.getUser(user.delegatedFromIds[index]);
      let childDelegates = await this.childDelegates(temp);
      delegations[user.name][temp.name];
      
      this.data.push({name: temp.name});
      this.links.push({
        source: temp.name,
        target: user.name,
        value: childDelegates + 1 + temp.delegatedFromIds.length
      });

      await this.checkDelegates(delegations[user.name], temp)
    }
    
  }

  async childDelegates(user: User): Promise<number> {
    let childDelegates = 0;
    if (user.delegatedFromIds.length > 0) {
      for (let index = 0; index < user.delegatedFromIds.length; index++) {
          var temp = this.dataService.getUser(user.delegatedFromIds[index]);
          childDelegates += temp.delegatedFromIds.length + await this.childDelegates(temp);
      }
      return childDelegates;
    } else {
      return childDelegates;
    }
  }


  
}
