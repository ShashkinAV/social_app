const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export const followAc = (userId) => ({type: FOLLOW, userId});
export const unFollowAc = (userId)=> ({type: UNFOLLOW, userId});

let initialState = {
  users: [
    { id: 1, followed: true, fullName: 'Dmitriy', status: 'Lorem ipsun trulala. Hello my firt duddy!', location: {country: 'Russia', city: 'Moscow'} },
    { id: 2, followed: false, fullName: 'Ivan', status: 'Hello World!', location: {country: 'Moldavia', city: 'Beshkek'} },
    { id: 3, followed: true, fullName: 'Masha', status: 'Lucky day! Good day!!', location: {country: 'Turkey', city: 'Stambul'} },
    { id: 4, followed: false, fullName: 'Andrew', status: 'Lorem ipsun trulala. Hello my firt duddy!', location: {country: 'Russia', city: 'Sochi'} }
  ],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
			
			case FOLLOW:

			case UNFOLLOW:
        default: 
            return state;
    }
}
export default usersReducer;