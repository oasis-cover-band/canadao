import { animate, query, style, transition, trigger } from "@angular/animations";



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

export const ngIfScaleAnimations =
trigger('ngIfScaleAnimations',
    [
    transition(
        ':leave', 
        [
            style({ transform: 'scale(1)'}),
            animate('0.25s ease-in', 
                style({ transform: 'scale(0)' }))
        ],
    ),
    transition(
        ':enter', 
        [
            style({ transform: 'scale(0)'}),
            animate('0.25s ease-in', 
                style({ transform: 'scale(1)' }))
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
trigger('mainRouterAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                style({opacity: 1}),
                animate('0.25s ease-in', style({opacity: 0})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                style({opacity: 0}),
                animate('0.25s 0.25s ease-in', style({opacity: 1})),
            ],
            { optional: true }
            ),
    ]),
]
);


export const centerPanelRouterAnimations =
trigger('centerPanelRouterAnimations',
    [
    transition(
        ':leave', 
        [
            style({ opacity: 1 }),
            animate('0.25s ease-in', 
                style({  opacity: 0}))
        ],
    ),
    transition(
        ':enter', 
        [
            style({ opacity: 0 }),
            animate('0.25s ease-in', 
                style({ opacity: 1 }))
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