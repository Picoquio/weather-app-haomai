//https://codepen.io/alvaromontoro/pen/GRNmdzB

export const SnowFlakes = () => {
    const arr = Array.from(Array(50));
    return (
        <>
            {arr.map(function () {
                return (
                    <div className='snowflake' />
                )
            })}

        </>
    )
}
