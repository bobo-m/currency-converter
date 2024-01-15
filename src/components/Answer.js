import currencies from '../currencies.json';

function Answer({val1, val2, curr1, curr2}){
    return(
        <div className="answer md:w-3/4 w-full self-start">
            <div className='text-white/75 text-lg'>
                {val1} {currencies[curr1].name} equals
            </div>
            <div className='text-white text-4xl'>
                {val2} {currencies[curr2].name}
            </div>
        </div>
    )
}

export default Answer;