

function Compscard(props){
    


    return(
        <div>
        <div className=" flex justify-center">
            <img className="h-full lg:w-[24em]" src={process.env.PUBLIC_URL + props.src} alt="#" />
        </div>
            <img className="py-3" src={process.env.PUBLIC_URL + props.div} alt="#" />

        
        </div>
    );
}

export default Compscard ;