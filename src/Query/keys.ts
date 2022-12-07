interface QueryKeysTypes<T = string> {
    loggedInUser: T
  }
  
  const QueryKeys: QueryKeysTypes = {
    loggedInUser: 'LOOGED_IN_USER',
  };
  
  export default QueryKeys