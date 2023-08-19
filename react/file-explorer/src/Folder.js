import { useState} from "react";

const Folder = ({explorer}) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    if(explorer.isFolder) {
        return (
            <div>
                <p onClick={() => setToggleMenu(!toggleMenu)}>🗂️ {explorer.name}</p>
                {toggleMenu && explorer.childItems.map(each => (
                    <p key={each.name}><Folder explorer={each}/></p>
                ))}
            </div>
        )
    }

    return (
        <p>📄 {explorer.name}</p>
    )
}

export default Folder;