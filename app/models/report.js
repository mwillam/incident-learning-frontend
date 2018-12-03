import DS from 'ember-data';

export default DS.Model.extend({
    reporterName: DS.attr('string'),
    reporterProfession: DS.attr('string'),
    date: DS.attr('date'),
    patientAge: DS.attr('number'),
    patientSex: DS.attr('string'),
    whileEmergency: DS.attr('boolean'),
    context: DS.attr('string'),
    textWhatHappened: DS.attr('string'),
    textSituationNow: DS.attr('string'),
    textHowToPrevent: DS.attr('string'),
    patientHarmed: DS.attr('number'),
    occurrence: DS.attr('number'),
    task: DS.attr('string')
    //task: DS.belongsTo('task')
});
