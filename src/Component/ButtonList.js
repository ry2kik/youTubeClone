import Button from "./Button";

const ButtonList = () => {
    // const listName = ['All', 'HTML', 'Web Development', 'Ancient History', 'Mythology', 'Media Theory', 'Music', 'Truth', 'Data Structure', 'Mixes', 'News', 'MsMojo', 'Naruto'];
    const listName = ['All', 'HTML', 'Web Development', 'Ancient History', 'Mythology', 'Media Theory', 'Music', 'Truth'];

    return (
        <div className="flex mt-2">
            {
                listName.map((items, index) => <Button name={items} key={index} />)
            }
        </div>
    )
}

export default ButtonList;