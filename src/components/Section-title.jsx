import "./Section-title.scss";

function SectionTitle({title}){
    return(
        <div className = "Section-title" >
            <span>
                {title}
            </span>
        </div>
    );
}

export default SectionTitle;