module.exports = {
  template: `
    <ModalConfirmation
      container-classes="max-w-md"
      title="Disclaimer"
      cancel-button="Cancel"
      continue-button="I understand"
      @cancel="emitCancel"
      @close="emitCancel"
      @continue="emitConfirm"
    >
      <div class="mb-6 text-grey-darker text-lg">
        <p class="mb-3">
          The information presented by this plugin is based on the data available on https://infinitysolutions.io and has been prepared for informational purposes only.
        </p>

        <p>
          Special thanks to delegates <span class="font-semibold">deadlock</span> and <span class="font-semibold">infinity developers</span> for building and maintaining https://infinitysolutions.io
        </p>
      </div>
    </ModalConfirmation>
  `,

  props: {
    callback: {
      type: Function,
      required: true
    }
  },

  methods: {
    executeCallback (event) {
      this.callback({
        component: 'DisclaimerModal',
        event
      })
    },

    emitCancel () {
      this.executeCallback('cancel')
    },

    emitConfirm () {
      this.executeCallback('confirm')
    }
  }
}
