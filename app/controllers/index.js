import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {not} from '@ember/object/computed';

export default Controller.extend({

    headerMessage: 'You can file reports here',

    // Report fields
    date: '',
    reporterName: '',
    reporterProfession: '',
    patientAge: '',
    patientSexW: 0,
    patientSexM: 0,
    patientSex:computed('patientSexM', 'patientSexW', function () {
        if (!this.patientSexM&&!this.patientSexW) return 0;
        if (this.patientSexM) return 'm';
        if (this.patientSexW) return 'w';
    }),
    patientHarmed: 0,
    occurrence: 0,
    task: '',
    textWhatHappened: '',
    textSituationNow: '',
    textHowToPrevent: '',
    context: '',

    actions: {

        sendReport() {

            const newReport = this.store.createRecord('report', {
                reporterName: this.get('reporterName'),
                reporterProfession: this.get('reporterProfession'),
                patientAge: this.get('patientAge'),
                patientSex: this.get('patientSex'),
                patientHarmed: this.get('patientHarmed'),
                occurrence: this.get('occurrence'),
                task: this.get('task'),
                textWhatHappened: this.get('textWhatHappened'),
                textSituationNow: this.get('textSituationNow'),
                textHowToPrevent: this.get('textHowToPrevent'),
                context: this.get('context'),
            });
            newReport.save().then(response => {
                    this.set('responseMessage', `Thank you, we saved your report, ${this.get('reporterName')}`);
                    this.clearFields();
            });

        },

    },

    clearFields:function() {
        this.set('reporterName', '');
        this.set('reporterProfession', '');
        this.set('patientAge', '');
        this.set('patientSex', '');
        this.set('patientHarmed', 0);
        this.set('occurrence', 0);
        this.set('task', '');
        this.set('textWhatHappened', '');
        this.set('textSituationNow', '');
        this.set('textHowToPrevent', '');
        this.set('context', '');
    }

});
