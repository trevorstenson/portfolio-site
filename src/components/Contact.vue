<template>
  <div id="contact">
    <div class="lowertitle">Contact</div>
    <div id="formarea">
      <div id="area-text">
        Feel free to contact me via LinkedIn, email, or send me a message.
      </div>
    <br><br>
      <form accept-charset="utf-8" action="https://usebasin.com/f/09c9f7e8a084" class="contact-form" method="POST">
            <div class="contact-form-top">
              <div class="contact-form-top-input">
                <label for="name"><input type="text" placeholder="Name *" id="name" name="name" autocomplete="off" required/></label>
              </div>
              <div class="contact-form-top-input">
                <label for="email"><input type="email" placeholder="Email *" id="email" name="email" autocomplete="off" required/></label>
              </div>
              <div class="contact-form-top-input">
                <label for="subject"><input type="text" placeholder="Subject" id="subject" name="subject"/></label>
              </div>
            </div>
            <div id="contact-form-bottom">
              <label for="message">Message *</label><br><textarea rows="7" placeholder="" id="message" name="message" required></textarea>
            </div>
            <input type="submit" id="submit" name="submit" value="Submit">
          </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact {
  padding-bottom: 50px;
  border-bottom-left-radius: 50% 20%;
}

#area-text {
  padding: 0% 15%;
}

#formarea {
  color: #eefceb;
  font-size: 24px;
}

.contact-form {
  font-size: 14px;
  padding: 0px auto;
  margin: auto 15%;
}

.contact-form input {
  margin-left: 5px;
  background-color: #eefceb;
  border-radius: 7px;
  border: solid transparent 5px;
}

.contact-form textarea {
  margin-left: 5px;
  background-color: #eefceb;
  border-radius: 7px;
  border: solid transparent 5px;
  margin-top: 10px;
  width: 250px;
}

.contact-form-top {
  display: inline-block;
  text-align: center;
  margin-top: 10px;
}

.contact-form-top-input {
  float: left;
  margin: 0% 20px;
}

#contact-form-bottom {
  margin: 20px 0px;
}

#submit {
  background-color: #254E58;
  border: solid #eefceb 1px;
  font-size: 20px;
  color: #eefceb;
  width: 100px;
  height: 40px;
}

@media screen and (max-width: 800px) {
  .contact-form-top-input {
    float: none;
    padding-bottom: 10px;
  }
}

</style>