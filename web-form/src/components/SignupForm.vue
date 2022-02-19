<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" />
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError">{{passwordError}}</div>
    <label>Role:</label>
    <select v-model="role">
      <option value="designer">Web designer</option>
      <option value="developer">Web developer</option>
    </select>
    <label>Skills:</label>
    <input type="text" v-model="tempSkills" @keyup.alt="addSkills" />
    <div class="key" v-for="skill in skills" :key="skill">
      <span @click="deleteSkill (skill)">{{ skill }}</span>
    </div>

    <div>
      <input type="checkbox" required v-model="terms" />
      <label>accepet terms and condition</label>
      <p v-if="checked">please check the term and condition</p>
    </div>
    <button @click="haldleSubmit">Create account</button>
  </form>
  <p>email update: {{ email }}</p>
  <p>password update: {{ password }}</p>
  <p>role update: {{ role }}</p>
  <p>accept terms: {{ terms }}</p>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: "false",
      tempSkills: "",
      skills: [],
      passwordError:"",
    };
  },
  methods: {
    addSkills(e) {
      if (e.key === "," && this.tempSkills) {
        if (!this.skills.includes(this.tempSkills)) {
          this.skills.push(this.tempSkills);
        }
        this.tempSkills = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    // validation
    haldleSubmit(){
        this.passwordError=this.passwordError.length>5? '':'password must be five digit';
        if(!this.passwordError){
            console.log('email:', this.email);
            console.log('password:', this.password);
            console.log('role:', this.role);
            console.log('skill:', this.skill);
            console.log('terms:', this.terms);
            console.log('passwordError:', this.passwordError);


        }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 20px 0 15px;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  box-sizing: border-box;
  display: block;
  padding: 10px 6px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #5555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0px 10px 0px 0px;
  position: relative;
  top: 1px;
}
.key {
  display: inline-block;
  background: #eee;
  padding: 6px 12px;
  margin: 20px 10px 0px 0px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}
</style>