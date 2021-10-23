<template>
  <ValidationObserver
    class="form-content"
    ref="observer"
    tag="form"
    v-slot="{ handleSubmit, invalid }"
  >
    <slot :handle-submit="handleSubmit" />

    <div v-if="!hideFooter" class="form-footer">
      <v-btn
        text
        large
        :loading="loading"
        :disabled="loading"
        color="primary"
        @click="$emit('cancel')"
      >
        {{ buttonCancelText }}
      </v-btn>
      <v-btn
        large
        :loading="loading"
        :disabled="invalid"
        color="primary"
        @click="handleSubmit(onSubmit)"
      >
        {{ buttonConfirmText }}
      </v-btn>
    </div>
  </ValidationObserver>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import { extend, setInteractionMode, ValidationObserver } from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})"
});

extend("required", {
  ...required,
  message: "{_field_} não pode ser vazio"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} não são iguais {regex}"
});

extend("email", {
  ...email,
  message: "Email deve ser válido"
});

export default {
  name: "BaseForm",
  components: { ValidationObserver },
  props: {
    buttonCancelText: {
      type: String,
      default: "Cancel"
    },
    buttonConfirmText: {
      type: String,
      default: "Save"
    },
    loading: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit");
    }
  }
};
</script>

<style lang="scss">
.form-content {
  .form-group {
    margin-bottom: 1em;
  }
  .form-footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
