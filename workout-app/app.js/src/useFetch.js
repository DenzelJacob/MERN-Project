const useFetch = (endpoint, request,content) => {
    return (  

        fetch(endpoint, {
            method: request,
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(content)
            // add time added to body

        })
        
        
        



    )
}
 
export default useFetch;