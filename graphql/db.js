export const users = [
    {
        id: 0,
        eid: 'user0',
        name: 'Jack Kim0',
        email: 'sokin0@hotmail.com',
        score: 0
    },
    {
        id: 1,
        eid: 'user1',
        name: 'Jack Kim1',
        email: 'sokin1@hotmail.com',
        score: 3848
    },
    {
        id: 2,
        eid: 'user2',
        name: 'Jack Kim2',
        email: 'sokin2@hotmail.com',
        score: 134
    },
    {
        id: 3,
        eid: 'user3',
        name: 'Jack Kim3',
        email: 'sokin3@hotmail.com',
        score: 22
    }
]

export const schedules = [
    {
        id: 0,
        from: '9 am',
        to: '11 am',
        where: 'CN tower',
        address: 'downtown',
        description: 'desc'
    },
    {
        id: 1,
        from: '12 pm',
        to: '1 pm',
        where: 'Eaton center',
        address: 'downtown1',
        description: 'desc1'
    },
    {
        id: 2,
        from: '2 pm',
        to: '3 pm',
        where: 'Theater',
        address: 'downtown2',
        description: 'desc2'
    }
]

export const plans = [
    {
        suggester: 0,
        place: 'toronto0',
        id: 0,
        up: 2323,
        down: 112,
        schedules: [
            0,
            1
        ]
    }, 
    {
        suggester: 1,
        place: 'toronto1',
        id: 1,
        up: 232332,
        down: 11211,
        schedules: [
            1,
            2
        ]
    },
    {
        suggester: 2,
        place: 'toronto2',
        id: 2,
        up: 233,
        down: 12,
        schedules: [
            2,
            0
        ]
    }
]

export const getPlanById = id => {
    return plans.find(plan => id === String(plan.id))
}

export const getUserById = id => {
    return users.find(user => id === String(user.id))
}