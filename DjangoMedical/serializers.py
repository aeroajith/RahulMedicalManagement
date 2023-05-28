from rest_framework import serializers
from DjangoMedical.models import Company,CompanyBank,Medicine,MedicineDetails,Employee,Customer,Bill,EmployeeSalary,BillDetails,CustomerRequest,CompanyAccount,EmployeeBank
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"


class CompanyBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyBank
        fields = "__all__"


    def to_representation(self, instance):
        response =  super().to_representation(instance)
        response ['company'] = CompanySerializer(instance.company_id).data
        return response
    
class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = "__all__"



    def to_representation(self, instance):
        response =  super().to_representation(instance)
        response ['company'] = CompanySerializer(instance.company_id).data
        return response
    

class MedicineDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicineDetails
        fields = "__all__"

    
    def to_representation(self, instance):
        response =  super().to_representation(instance)
        response ['medicine'] = MedicineSerializer(instance.medicine_id).data
        return response

    
class MedicineDetailSerializerSimple(serializers.ModelSerializer):
    class Meta:
        model = MedicineDetails
        fields = "__all__"



class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"



class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = "__all__"



class EmployeeSalarySerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeSalary
        fields = "__all__"

    
    
class BillDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillDetails
        fields = "__all__"

        
class CustomerRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerRequest
        fields = "__all__"


class CompanyAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyAccount
        fields = "__all__"

    def to_representation(self, instance):
        response =  super().to_representation(instance)
        response ['company'] = CompanySerializer(instance.company_id).data
        return response
    
class CompanyBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyBank
        fields = "__all__"

    def to_representation(self, instance):
         response =  super().to_representation(instance)
         response ['company'] = CompanySerializer(instance.company_id).data
         return response
    
class EmployeeBankSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeBank
        fields = "__all__"

     