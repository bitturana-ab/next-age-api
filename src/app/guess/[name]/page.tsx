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
    const ageData = getAge(name);
    const genderData = getGender(name);
    const nationData = getNation(name);
    // console.log((await ageData).toString())

    const [age,gender,nation] = await Promise.all([ageData,genderData,nationData]);

    // console.log(age);
    // console.log(gender)
    // console.log(nation)
    return(
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Personal Info
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Age: {age?.age}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Gender: {gender?.gender}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Nationality: {nation?.country?.country_id}
        </div>
      </div>
    </div>
    )
}