console.log('checkin home');
var jsonStr2 = JSON.stringify({
    "method":"workflowchecklist"
    ,"workflowcode":"checkin"
    ,"reservationref":"5821574CCAF1CF4"
});
$.ajax({
    
    url: "https://api.rentalcarmanager.com/v32/api",
    headers: { "Authorization": "Bearer " + "OZ_9E237gB1UDvUY82iiKkNjI64Pj4v2fsJyH2IlGZEXKGb0c3IwRmPOCzXliaHfrkXJx3vH_p-syatzXZVBLN55_Ko7kF4eJ3ZzoLu-2OAW7DH5oZ9WMikQHSDVnK5FLPe262FlUSczr7dbswkeffcw7s-nF8vX9K9E3fcnie_JXAMEmfSMkeOlOEm7Kr70hkB1ZZkmpp-XbTNtPKFKKSvAG0V77sIIY5cJx6YPwoKEb5_fVK9lIO0xS9GY33k1WHh8nB3f3Ze87ImXzzHGKHVVFkZ3mOUiqKcJFD_pL7mM-GazNlRmjVyBJA1HjnUUAb6KsNeId7j8qtps2JJT8OmS9yqRl7BRFJcCpzPvLC94uxj5vr79C94ez5uhKwcLdPl6IbY7z4_h43Pmi5ntnzWXiqr7PDu0wgYcaS3OFNhdK2p9Rs-B-qzwQbRmPNaXdGUxJsa5t9h5h4hggY2b-ZpRZmIObF-fJmaGY94-btlZwYYGjJlpY2WBeOVsE_Z2BrsxX4V49wI8AraErPixnPSRVYhkOz6XJPTRTXv1DKRsXPe9urlTpJ721PEdGByq"},
    crossDomain: true,
    dataType: "json",
    type: "post",
    data: jsonStr2,
    success: function (data3, textStatus, jqXHR) {
        console.log("data work flow:"+data3);
        
    }
});