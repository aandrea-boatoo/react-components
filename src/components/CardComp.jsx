import dessert from "../data/post"

function CardComp() {

    const tag = dessert.map((element) => {
        return <p className={`tag + ${element.tags[element.id - 1]}`}>{element.tags[element.id - 1]}</p>
    })

    const dolce = dessert.map((element) => {
        return (
            <div key={element.id} className="card">
                <img src={element.img} alt="" />
                <h3>{element.title}</h3>
                <p>{element.content}</p>
                <div className="tagCont">{tag}</div>
            </div>
        )
    })
    return dolce
}



export default CardComp