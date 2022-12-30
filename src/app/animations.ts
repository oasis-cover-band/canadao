import { animate, style, transition, trigger } from "@angular/animations";



export const ngIfHeightAnimations =
trigger('ngIfHeightAnimations',
    [
    transition(
        ':leave', 
        [
            style({ height: '*', maxHeight: '*', minHeight: '*' }),
            animate('0.25s ease-in', 
                style({ height: '0%', maxHeight: '0%', minHeight: '0%' }))
        ],
    ),
    transition(
        ':enter', 
        [
            style({ height: '0%', maxHeight: '0%', minHeight: '0%' }),
            animate('0.25s ease-in', 
                style({ height: '*', maxHeight: '*', minHeight: '*' } ))
        ]
    ),
    ]
);

export const asideRouterAnimations =
trigger('asideRouterAnimations',
    [
    transition(
        ':leave', 
        [
            
        ],
    ),
    transition(
        ':enter', 
        [

        ]
    ),
    ]
);


export const mainRouterAnimations =
trigger('mainRouterAnimations',
    [
    transition(
        ':leave', 
        [
            
        ],
    ),
    transition(
        ':enter', 
        [

        ]
    ),
    ]
);


export const navRouterAnimations =
trigger('navRouterAnimations',
    [
    transition(
        ':leave', 
        [
            
        ],
    ),
    transition(
        ':enter', 
        [

        ]
    ),
    ]
);


export const topRouterAnimations =
trigger('topRouterAnimations',
    [
    transition(
        ':leave', 
        [
            
        ],
    ),
    transition(
        ':enter', 
        [

        ]
    ),
    ]
);