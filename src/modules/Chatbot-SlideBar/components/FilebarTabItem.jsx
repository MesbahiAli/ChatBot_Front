import React from 'react'

const FilebarTabItem = () => {
    return (
        <>
            <ListSubheader key={-index - 1} component="span" style={{ fontSize: "10px", color: "white", background: "transparent", padding: 0, margin: 0 }} >
                {el.categories[0]}
            </ListSubheader>
            <div key={index} className='uploaded-item-container'>
                {formatFileName(el.filename)}

                <div className='icon-container'>
                    <Checkbox
                        style={checkStyle}
                        edge="start"
                        checked={selectedFilesFromServer.includes(el.filename)}
                        onChange={() => handleServerFileSelect(el.filename)}
                    />
                    <SettingsPanel el={el} />
                </div>
            </div>
        </>
    )
}

export default FilebarTabItem