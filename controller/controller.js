
let volunterStore = []

const defaultCon = (req, res) => {
    res.render('index', { volunter: volunterStore });
}

const addVolunter = (req, res) => {
    const todoObj = {
        id: volunterStore.length + 1,
        name: req.body.fname,
        email: req.body.email,
        phoneNumber: req.body.pnumber,
        skills: req.body.skill

    }

    volunterStore = [...volunterStore, todoObj]
    console.log("volunterStore", volunterStore);

    res.redirect('/')
}

const editVolunter = (req, res) => {
    const { id } = req.params;
    console.log('idd', id);


    let singleVolunter = volunterStore.find((data) => data.id == id);
    console.log('reccccc', singleVolunter);


    res.render('EditVolunter', { singleVolunter });
}

const updateVolunter = (req, res) => {
    console.log("id", req.body.id);

    let updateStrore = volunterStore.map((update) => {
        if (update.id == req.body.id) {
            console.log('donneeee', req.body);
            return update = req.body
        } else {
            console.log('errrro');
            return update
        }
    })

    volunterStore = updateStrore;
    res.redirect('/')
} 

const deletVoluter =(req,res)=>{
    const deleteStore = volunterStore.filter((deleteData) => {
        return deleteData.id != req.params.id
    })

    volunterStore = deleteStore;
    res.redirect('/');
}

module.exports = { defaultCon, addVolunter, editVolunter, updateVolunter,deletVoluter};
