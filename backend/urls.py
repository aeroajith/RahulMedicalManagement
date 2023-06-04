"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from backend.views import index
from backend import settings
from rest_framework import routers
from DjangoMedical import views
from DjangoMedical.views import CompanyNameViewset, MedicineNameViewset,CompanyOnlyViewset,EmployeeBankByEIDViewset,EmployeeSalaryByEIDViewset
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register("company",views.CompanyViewSet, basename="company")
router.register("companybank",views.CompanyBankViewset, basename="companybank")
router.register("medicine",views.MedicineViewset, basename="medicine")
router.register("companyaccount",views.CompanyAccountViewset, basename="companyaccount")
router.register("employee",views.EmployeeViewset, basename="employee")
router.register("employee_all_bank",views.EmployeeBankViewset, basename="employee_all_bank")
router.register("employee_all_salary",views.EmployeeSalaryViewset, basename="employee_all_salary")
router.register("generate_bill",views.GenerateBillViewset, basename="generate_bill")
router.register("customer_request",views.CustomerRequestViewSet, basename="customer_request")
router.register("home_api",views.HomeApiViewSet, basename="home_api")

urlpatterns = [
    
    path('',index),
    path('home', index),
    path('company', index),
    path('companydetails/:id', index),
    path('addcompanybank/:id', index),
    path('editcompanybank/:company_id/:id', index),
    path('addmedicine', index),
    path('managemedicine', index),
    path('companyaccount', index),
    path('manageemployee', index),
    path('employeedetails/:id', index),
    path('generatebill', index),
    path('customer_request', index),
    
    
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
    path('api/gettoken/',TokenObtainPairView.as_view(),name="gettoken"),
    path('api/refresh_token/',TokenRefreshView.as_view(),name="refresh_token"),
    path('api/companybyname/<str:name>',CompanyNameViewset.as_view(),name="companybyname"),
    path('api/medicinebyname/<str:name>',MedicineNameViewset.as_view(),name="medicinebyname"),
    path('api/companyonly/',CompanyOnlyViewset.as_view(),name="companyonly"),
    path('api/employee_bankby_id/<str:employee_id>',views.EmployeeBankByEIDViewset.as_view(),name="employee_bankby_id"),
    path('api/employee_salaryby_id/<str:employee_id>',views.EmployeeSalaryByEIDViewset.as_view(),name="employee_salaryby_id"),
]+static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_URL)
