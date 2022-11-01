<template>
  <div>
    
  </div>
</template>

<script>
export default {
    created(){
        if(this.$auth.user.account_type=='Admin') location='/admin/classes'
        else location='/notification'
    }
}
</script>

<style>

</style>