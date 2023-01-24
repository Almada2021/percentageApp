import InputChecks from "../InputChecks/InputChecks";

function ListInput({testArr, setDataStorage}) {
  return (
    <>
        {   testArr && testArr.length >= 1?
            testArr.map((element, index) => {
                return(
                    <InputChecks element={element} data={testArr} setDataStorage={setDataStorage} values={index}  key={`${element?.place}${Math.random(1)}`}/>
                )
            })
            :
            null
        }
    </>
    );
}

export default ListInput;
