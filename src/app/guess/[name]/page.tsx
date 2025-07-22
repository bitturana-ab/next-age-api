// "use server"

const getGender  = async (name:string) =>{
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json();
}

const getAge  = async (name:string) =>{
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json();
}

const getNation  = async (name:string) =>{
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json();
}

interface Params {
    params: {name : string}
}

export default async function page ({params}:Params){
    const name = (await params).name;
    const ageData = getAge( name);
    const genderData = getGender(name);
    const nationData = getNation(name);
    // console.log((await ageData).toString())

    const [age,gender,nation] = await Promise.all([ageData,genderData,nationData]);

    console.log(age);
    console.log(gender)
    console.log(nation)
    return(
        <div>
            <div>
                <h1>Hello {name}</h1>
                <div>Personal Info</div>
                <div>Total people of this name : {age?.count}</div>
            <div>
                Your predicted age: { age?.age}
            </div>
            <div>Your pedictes gender: {gender?.gender}</div>
            {/* <div>Your predicted nation: {nation?.country[0]?.country_id}</div> */}
            </div>
            
        </div>
    )
}