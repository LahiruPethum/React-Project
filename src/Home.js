const Home = () => {

    const handleClick = (e) => {
     
            console.log('hi lahiru');
        
    }

    const handleClickAgain = (name) => {
     
        console.log('hi lahiru '+name);
    
}
const handleClickAgain2 = (name,e) => {
     
    console.log('hi lahiru '+name,e.target);

}
   
    return ( 
        <div className="home">
            <h1>Home Page
                </h1>
                <button onClick={handleClick}>click me</button>
                <button onClick={()=>handleClickAgain('pethum')}>click me</button>
                <button onClick={(e)=>handleClickAgain2('pethum',e)}>click me</button>
        </div>
      
     );
}
 
export default Home;