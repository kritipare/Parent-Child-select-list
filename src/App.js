import MultiCheck from "./List";

const App = () => {
    const items = {
        food: ["burger", "pizza", "pasta", "panipuri"],
        clothes: ["shirt", "pant", "trouser", "jeans"],
        gadgets: ["phone", "laptop", "tablet"],
    };

    return (
        <div style={{ padding: "20px" }}>
            <ul>
                {Object.entries(items).map(([key, value]) => {
                    return (
                        <MultiCheck parentLabel={key} childOptions={value} />
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
