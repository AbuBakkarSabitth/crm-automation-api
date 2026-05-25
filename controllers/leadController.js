const Lead = require('../models/Lead');
const sendTelegramMessage = require('../services/telegramService');
// CREATE LEAD

const createLead = async (req, res) => {
    try {
        const { name, email, phone,status }  = req.body;
        const lead = await Lead.create({
            name,
            email,
            phone,
            status
        });
        await sendTelegramMessage(`New Lead Added
            Name: ${lead.name}
            Email: ${lead.email}
            Phone: ${lead.phone}
            Status: ${lead.status}
        `);
        res.status(201).json({
            message: "Lead created successfully",
            lead
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getLeads = async (req, res) => {

    try {

        const filter = {};

        // FILTER BY STATUS
        if (req.query.status) {
            filter.status = req.query.status;
        }

        // SEARCH BY NAME OR EMAIL
        if (req.query.search) {

            filter.$or = [

                {
                    name: {
                        $regex: req.query.search,
                        $options: "i"
                    }
                },

                {
                    email: {
                        $regex: req.query.search,
                        $options: "i"
                    }
                }

            ];
        }

        const page = Number(req.query.page) || 1;

const limit = Number(req.query.limit) || 5;

const skip = (page - 1) * limit;
let sortOption = {};
if(req.query.sort  === "latest") {
    sortOption.createdAt =   -1;
}
if(req.query.sort === "oldest"){
    sortOption.createdAt =  1;
}

const leads = await Lead.find(filter)
    .sort(sortOption)
    .skip(skip)
    .limit(limit);

        res.status(200).json(leads);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const getRecentLeads = async (req, res) => {

    try {

        const recentLeads = await Lead.find()
            .sort({ createdAt: -1 })
            .limit(5);

        res.status(200).json(recentLeads);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const updateLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(req.params.id, req.body,
            { new: true });
            if(!lead){
                return res.status(404).json({
                    message: "Lead not found"
                });
            }
            res.status(200).json({
                message: "Lead updated successfully",
                lead
            });
        } catch (error){
            res.status(500).json({
                message: error.message
            });
        }
        
    }

const deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndDelete(req.params.id);
        if(!lead) {
            return res.status(404).json({
                message: "Lead not found"
            });
        }
        res.status(200).json({
            message: "Lead deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });;
    }
};
const getLeadStats = async (req, res) => {
    try {
        const totalLeads = await Lead.countDocuments();

        const newLeads = await Lead.countDocuments({
            status: "new"
        });
        const  contactedLeads =  await Lead.countDocuments({
            status: "contacted"
        });
        const convertedLeads = await Lead.countDocuments({
            status: "converted"
        });
        res.status(200).json({
            totalLeads,
            newLeads,
            contactedLeads,
            convertedLeads
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const addNoteToLead = async (req, res) => {

    try {

        const { text } = req.body;

        const lead = await Lead.findById(req.params.id);

        if(!lead){
            return res.status(404).json({
                message: "Lead not found"
            });
        }

        lead.notes.push({
            text
        });

        await lead.save();

        res.status(500).json({
            message: "Note added successfully",
            lead
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
  
 

module.exports = {
    createLead,
    getLeads,
    updateLead,
    deleteLead,
    getLeadStats,
    getRecentLeads,
    addNoteToLead
};