
export default function page ({params}:any){
    return(
        <div>
            <div>
                <h1>Hello {params.name}</h1>
            </div>
        </div>
    )
}