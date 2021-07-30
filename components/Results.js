import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
    return (
        <FlipMove className="lg:px-5 px-1 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 rounded">
            {results.map(result =>(
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    );
};


export default Results;
