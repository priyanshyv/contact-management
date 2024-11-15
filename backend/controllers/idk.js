const Contact = require('../models/contact');
exports.createContact = async (req,res)=>{
    try{
        const {firstname,lastname,email,phoneno,company,jobtitle} = req.body;
        const newcontact = new Contact({firstname,lastname,email,phoneno,company,jobtitle});
        await newcontact.save();
        return res.status(200).json({
            success:true,
            message:'sab changa hai ji while creating contact'
        })
    }
    catch(error){
        return res.status(500).json({ 
            success: false, 
            message: "nayi contact add kari tab dikkat aai",
        });
    }
}
exports.getContact = async(req,res)=>{
    try{
        const contact = await Contact.find();
        res.json(contact);
        //console.log(contact);
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message: "nayi contact get kara tab dikkat aai", 
        });
    }
}
exports.getContactById = async(req,res)=>{
    try{
        const id = req.params.id;
        const contact = await Contact.findById(id);
        if (!contact) return res.status(404).json({ error: "car not found" });
            res.json(contact);
        }
    catch(error){
                return res.status(500).json({
                    success:false,
                    message: "nayi contact get kara tab dikkat aai", 
                });
    }
}
exports.updateContact = async(req,res)=>{
    try{
        const id = req.params.id;
        const contact = await Contact.findByIdAndUpdate(id,req.body);
        res.json(contact);
       // console.log(contact);
            }
            catch(error){
                return res.status(500).json({
                    success:false,
                    message: "nayi contact update kara tab dikkat aai",
                });
            }
}
exports.deleteContact = async(req,res)=>{
    try{
        await Contact.findByIdAndDelete(req.params.id);
res.json({
            message:'deleted successsfully',
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message: "nayi contact update kara tab dikkat aai",
        });
    }
}
