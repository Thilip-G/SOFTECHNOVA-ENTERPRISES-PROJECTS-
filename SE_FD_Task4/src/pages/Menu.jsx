import FoodMenu from "../components/FoodMenu";

const Menu=()=>{
    return(
        <>
        <div className="container bg-food p-5">
                <h1 className="text-center fs-1 fw-bolder text-white my-5">Menu</h1>
            </div>
        <FoodMenu/>
        </>
    );
}

export default Menu;