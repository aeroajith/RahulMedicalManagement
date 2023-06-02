class Config{
    static loginURL="https://www.ragavimedical.online/api/gettoken/";
    static refreshApiUrl = "https://www.ragavimedical.online/api/refresh_token/"
    static companyApiUrl = "https://www.ragavimedical.online/api/company/"
    static companyOnlyUrl = "https://www.ragavimedical.online/api/companyonly/"
    static companyBankApiUrl = "https://www.ragavimedical.online/api/companybank/"
    static medicineApiUrl = "https://www.ragavimedical.online/api/medicine/"
    static medicineByNameApiUrl = "https://www.ragavimedical.online/api/medicinebyname/"
    static companyAccountApiUrl = "https://www.ragavimedical.online/api/companyaccount/"
    static employeeApiUrl = "https://www.ragavimedical.online/api/employee/"
    static employeeSalaryApiUrl = "https://www.ragavimedical.online/api/employee_all_salary/"
    static employeeBankApiUrl = "https://www.ragavimedical.online/api/employee_all_bank/"
    static employeeSalaryByIDApiUrl = "https://www.ragavimedical.online/api/employee_salaryby_id/"
    static employeeBankByIDApiUrl = "https://www.ragavimedical.online/api/employee_bankby_id/"
    static generateBIllApiUrl = "https://www.ragavimedical.online/api/generate_bill/"
    static customerRequestApiUrl = "https://www.ragavimedical.online/api/customer_request/"
    static homepageApiUrl = "https://www.ragavimedical.online/api/home_api/"
    static homeUrl="/home";
    static logoutPageUrl="/logout"

    static sidebarItem = [
        {index:"0",title:"Home",url:"/home",icons:"home"},
        {index:"1",title:"Company",url:"/company",icons:"assessment"},
        {index:"2",title:"Medicine",url:"/addmedicine",icons:"assessment"},
        {index:"3",title:"Manage Medicine",url:"/managemedicine",icons:"assessment"},
        {index:"4",title:"Manage Company Account",url:"/companyaccount",icons:"assessment"},
        {index:"5",title:"Manage Employee",url:"/manageemployee",icons:"assessment"},
        {index:"6",title:"Generate Bill",url:"/generatebill",icons:"assessment"},
        {index:"7",title:"Customer Request",url:"/customer_request",icons:"assessment"}
    ]
}

export default Config

