import { User } from '../models/user.interface';

const userList: User[] = 
[
    {
        name: 'PaulHalliday',
        company: 'PWH',
        location: 'Durham, UK',
        bio: 'Udemy Instructor',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'paul@paul.com'
    },
    {
        name: 'ChargerIIC',
        company: 'House Of Burt',
        location: 'Fresno, CA',
        bio: 'Udemy Student',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'ChargerIIC@email.com'
    }
]

export const USER_LIST = userList;