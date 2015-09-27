import 'isomorphic-fetch';

import { Actions } from '../constants';



const GroupActions = {


  test() {console.log("TestAction");
    
    return {groups2: [{id: 1, title: "test"}]}  ;
    
  },

}
export default GroupActions;