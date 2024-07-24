    // // Activity 3
    // const fetchres = async function result() {
    //   return new Promise((resolve)=>{
    //     setTimeout(()=>{
    //       resolve("implementation of async await");
    //     }, 1000);
    //   });
    // }

    // async function logResolved() {
    //   try{
    //      const result = await fetchres()
    //      console.log(result);
    //   } catch (error){
    //     console.error("Error:", error);
    //   }
    // }

    // logResolved();

    // const createRejectedPromise = () =>
    //   new Promise((reject) => {
    //     setTimeout(() => {
    //       reject("can't process your request");
    //     }, 2000);
    //   });
    
    // const logReject = async () => {
    //   try {
    //     const result = await createRejectedPromise();
    //     console.log(result);
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };
    
    // logReject();