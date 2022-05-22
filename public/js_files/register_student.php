/*
<script>
        $(function(){
            $(document).click(function(){
                $.ajax({
                    url : "<?= base_url("ajax-request-register")?>",
                    type : "POST",
                    data : {
                        username : $("#username").val()
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") alert("AA");
                        else alert("BBB");
                    }
                });
            });
        });
    </script>
*/