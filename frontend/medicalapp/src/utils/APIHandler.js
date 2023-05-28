import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
const { default: AuthHandler } = require("./AuthHandler");

const {default: Config} = require ("./config")


 
class APIHandler{
    async checkLogin(){
        if(AuthHandler.checkTokenExpiry()){
            try{
            var response = await axios.post(Config.refreshApiUrl,{
                refresh: AuthHandler.getRefreshToken()
            }) 
            reactLocalStorage.set("token",response.data.access) 
        }
        catch(error){
            console.log(error)
            //Not using a valid token then refresh and logout the user
            AuthHandler.logoutUser()
            window.location = '/'
        }
        }
        
    }
    async saveCompanyData(
        name,
        license_no,
        address,
        contact_no,
        email,
        description
        ){
        await this.checkLogin()
        //wait untill token get updated
        var response = await axios.post(
            Config.companyApiUrl,{
                name:name,
                license_no:license_no,
                address:address,
                contact_no:contact_no,
                email:email,
                description:description,
            },
        {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
    }
    async fetchAllCompany(){
        await this.checkLogin()

        var response = await axios.get(
            Config.companyApiUrl,
            {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
            })
            return response;
    }
    async fetchAllCompanyAccount(){
        await this.checkLogin()

        var response = await axios.get(
            Config.companyAccountApiUrl,
            {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
            })
            return response;
    }

    async fetchCompanyDetails(id){
        await this.checkLogin()

        var response = await axios.get(
            Config.companyApiUrl+""+id+"/",
            {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
            })
            return response;
    }

    async editCompanyData(
        name,
        license_no,
        address,
        contact_no,
        email,
        description,
        id
        ){
        await this.checkLogin()
        //wait untill token get updated
        var response = await axios.put(
            Config.companyApiUrl+""+id+'/',{
                name:name,
                license_no:license_no,
                address:address,
                contact_no:contact_no,
                email:email,
                description:description,
            },
        {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
    }
    async saveCompanyBankData(
        accounts_holder_name,
        bank_account_no,
        ifsc_Code,
        company_id
        
        ){
        await this.checkLogin()
        //wait untill token get updated
        var response = await axios.post(
            Config.companyBankApiUrl,{
                accounts_holder_name:accounts_holder_name,
                bank_account_no:bank_account_no,
                ifsc_Code:ifsc_Code,
                company_id:company_id
            },
        {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
    }
    async fetchCompanyBankDetails(id){
        await this.checkLogin()

        var response = await axios.get(
            Config.companyBankApiUrl+""+id+"/",
            {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
            })
            return response;
    }
    async editCompanyBankData(
        accounts_holder_name,
        bank_account_no,
        ifsc_Code,
        company_id,
        id
        ){
        await this.checkLogin()
        //wait untill token get updated
        var response = await axios.put(
            Config.companyBankApiUrl+""+id+'/',{
                accounts_holder_name:accounts_holder_name,
                bank_account_no:bank_account_no,
                ifsc_Code:ifsc_Code,
                company_id:company_id
            },
        {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
}

    async fetchAllCompanyOnly(){
    await this.checkLogin()

    var response = await axios.get(
        Config.companyOnlyUrl,
        {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
        })
        return response;
}

    async saveMedicineData( name,
        medical_type,
        buy_price,
        sell_price,
        c_gst,
        s_gst,
        batch_no,
        shelf_no,
        expire_date,
        mfg_date,
        company_id,
        description,
        in_stock_total,
        qty_in_strip,
        medicinedetails){
        await this.checkLogin()
        var response = await axios.post(
            Config.medicineApiUrl,{
                name:name,
                medical_type:medical_type,
                buy_price:buy_price,
                sell_price:sell_price,
                c_gst:c_gst,
                s_gst:s_gst,
                batch_no:batch_no,
                shelf_no:shelf_no,
                expire_date:expire_date,
                mfg_date:mfg_date,
                company_id: company_id,
                description:description,
                in_stock_total:in_stock_total,
                qty_in_strip:qty_in_strip,
                medicine_details:medicinedetails,
                
            },
        {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
       
    }

    
    async fetchAllMedicine(){
        await this.checkLogin()
    
        var response = await axios.get(
            Config.medicineApiUrl,
            {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
            })
            return response;
        }

    
    
    
    async editMedicineData(name,
        medical_type,
        buy_price,
        sell_price,
        c_gst,
        s_gst,
        batch_no,
        shelf_no,
        expire_date,
        mfg_date,
        company_id,
        description,
        in_stock_total,
        qty_in_strip,
        medicinedetails,
        id,){
        await this.checkLogin()
        var response = await axios.put(
            Config.medicineApiUrl + ""+ id +"/",{
                name:name,
                medical_type:medical_type,
                buy_price:buy_price,
                sell_price:sell_price,
                c_gst:c_gst,
                s_gst:s_gst,
                batch_no:batch_no,
                shelf_no:shelf_no,
                expire_date:expire_date,
                mfg_date:mfg_date,
                company_id: company_id,
                description:description,
                in_stock_total:in_stock_total,
                qty_in_strip:qty_in_strip,
                medicine_details:medicinedetails,
                
            },
        {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
       
    }

    async saveCompanyAccountData(
        company_id,
        transaction_type,
        transaction_amount,
        transaction_date,
        payment_mode


        
        ){
        await this.checkLogin()
        //wait untill token get updated
        var response = await axios.post(
            Config.companyAccountApiUrl,{
                company_id:company_id,
                transaction_type:transaction_type,
                transaction_amount:transaction_amount,
                transaction_date:transaction_date,
                payment_mode:payment_mode

            },
        {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
    }

    async fetchEmployee(){
        await this.checkLogin()
    
        var response = await axios.get(
            Config.employeeApiUrl,
            {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
            })
            return response;
        }
    
    async saveEmployeeData(
            name,
            joining_date,
            phone,
            address
            
        ){
        await this.checkLogin()
            //wait untill token get updated
        var response = await axios.post(
            Config.employeeApiUrl,{
                    name:name,
                    joining_date:joining_date,
                    phone:phone,
                    address:address
    
                },
        {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
        }

    async fetchEmployeeById(id){
        await this.checkLogin()
        
        var response = await axios.get(
                Config.employeeApiUrl +""+ id +"/",
                {
                    headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
                })
            return response;
            }

    async editEmployeeData(
                name,
                joining_date,
                phone,
                address,
                id,
                
            ){
           await this.checkLogin()
                //wait untill token get updated
            var response = await axios.put(
                Config.employeeApiUrl +""+id+"/",{
                        name:name,
                        joining_date:joining_date,
                        phone:phone,
                        address:address
        
                    },
            {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
            return response;
            }

    async fetchEmployeeSalary(id){
                await this.checkLogin()
                
        var response = await axios.get(
                    Config.employeeSalaryByIDApiUrl +""+ id,
                        {
                            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
                        })
                return response;
                    }

    async AddEmployeeSalary(
                        salary_date,
                        salary_amount,
                        employee_id
                        
                    ){
        await this.checkLogin()
                        //wait untill token get updated
                    var response = await axios.post(
                        Config.employeeSalaryApiUrl,{
                                salary_date:salary_date,
                                salary_amount:salary_amount,
                                employee_id:employee_id,
                                
                
                            },
                    {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
            return response;
                    }


    async AddEmployeeBankData(
                        bank_account_no,
                        ifsc_Code,
                        employee_id
                        
                    ){
        await this.checkLogin()
                        //wait untill token get updated
                    var response = await axios.post(
                        Config.employeeBankApiUrl,{
                                bank_account_no:bank_account_no,
                                ifsc_Code:ifsc_Code,
                                employee_id:employee_id,
                                
                
                            },
                    {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
        return response;
                    }

    async fetchEmployeeBank(id){
        await this.checkLogin()
                        
            var response = await axios.get(
                    Config.employeeBankByIDApiUrl +""+ id,
                    {
                    headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
                    })
            return response;
                            }

    async fetchAllMedicineByName(name){
        if(name!=""){
        await this.checkLogin()
    
        var response = await axios.get(
            Config.medicineByNameApiUrl + "" + name,
            {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
            })
            return response;
      }else{
        return {data:[]}
            }
}

    async generateBill(
        name,
        phone,
        address,
        medicineDetails
    ){
        await this.checkLogin()
                    
        var response = await axios.post(
                Config.generateBIllApiUrl,{
                    name:name,
                    phone:phone,
                    address:address,
                    medicine_details:medicineDetails

                },
                {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
                })
        return response;
                        }

    async fetchAllCustomerRequest(id){
        await this.checkLogin()
                        
            var response = await axios.get(
                    Config.customerRequestApiUrl,
                    {
                    headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
                    })
            return response;
                            }

    async saveCustomerRequestData(
        customer_name,
        phone,
        medicine_details,
        prescription
        
    ){
    await this.checkLogin()
    var formData = new FormData()
    formData.append("customer_name",customer_name)
    formData.append("phone",phone)
    formData.append("medicine_details",medicine_details)
    formData.append("prescription",prescription)
        //wait untill token get updated
    var response = await axios.post(
        Config.customerRequestApiUrl,formData,
    {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken(),"Content-Type":"multipart/form-data"}})
    return response;
    }

    async updateCustomerRequest(customer_id,customer_name,phone,medicine_details,prescription){
    await this.checkLogin()
        //wait untill token get updated
        
    var response = await axios.put(
        Config.customerRequestApiUrl+""+customer_id+"/",{
            customer_name:customer_name,
            phone:phone,
            medicine_details:medicine_details,
            prescription:prescription,
            status:1,
        },
    {headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}})
    return response;
    }
    async fetchHomePage(){
        await this.checkLogin()
                        
            var response = await axios.get(
                    Config.homepageApiUrl,
                    {
                    headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()}
                    })
            return response;
                            }

}
export default APIHandler

