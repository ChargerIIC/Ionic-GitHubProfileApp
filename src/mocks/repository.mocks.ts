import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryList : Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'A repository showing the usage of the mobile Camera functionality in Ionic 3',
        owner: USER_LIST[0],
    },
    {
        name: 'Ionic 3 Vibration',
        description: 'A repository showing the usage of the mobile Vibration functionality in Ionic 3',
        owner: USER_LIST[0],
    },
    {
        name: 'Ionic 3 SMS',
        description: 'A repository showing the usage of the mobile SMS functionality in Ionic 3',
        owner: USER_LIST[1],
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'A repository showing the usage of the mobile Geolocation functionality in Ionic 3',
        owner: USER_LIST[1],
    },

]

export const REPOSITORY_LIST = repositoryList;