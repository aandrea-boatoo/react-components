import dessert from "../data/post"

function CardComp() {

    function tag() {
        for (let i = 0; i < dessert.tags.length; i++) {
            return <span>{dessert.tags[i]} </span>;
        }
    }
    const dolce = dessert.map((element) => {
        return (
            <div key={element.id} className="card">
                <img src={element.img} alt="" />
                <h3>{element.title}</h3>
                <p>{element.content}</p>
                <div>{tag}</div>
            </div>
        )
    })
    return dolce
}



export default CardComp