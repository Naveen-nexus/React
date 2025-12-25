function StudentLecture6({ name }) {
    return (
        <div>
            <hr />
            <hr />
            <h2> # ====##Pass data in component with click##==== #</h2>
            <h2>Studentname : {name}</h2>
            <hr />
        </div>
    );
}

export default StudentLecture6;



//****************IMPORTANT**************************** */

//mai chahta hu ki ek button click karne par nam update ho jaye aur props ke through data pass ho jaye to sbse phle mai ek state banaunga jisme name store hoga aur button pe onClick event laga dunga jisse click karne par name change ho jaye aur fir is state ko props ke through component me pass kar dunga
