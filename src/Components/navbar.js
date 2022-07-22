const Navbar = (props) => {
    return (
        <nav style={styles.navStyle}>
            <h1>{props.text}</h1>
        </nav>
    )
}

const styles = {
    navStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        border: 'solid cyan 5px',

    }
}

export default Navbar