<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="formData1" >
      <div style="display: flex;width: 100%">
        <div class="box padding10" style="text-align: left;width: 40%">
          <t-single-select
            v-model="formData1.formStatus"
            group_label="What is the current status of this person?"
            group_id="formStatus"
            :candidates="[
              'PUI, testing pending',
              'PUI, tested negative',
              'Presumptive case (positive local test), confirmatory tested negative',
              'Laboratory-confirmed case',
              'Probable case'
            ]"
            v-on:input="handleInput"
          />
          <div>
            <label >Report date of PUI to CDC (MM/DD/YYYY):
            </label>
            <b-form-datepicker  size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-model="formData1.formStatusDate" @input="handleInput"></b-form-datepicker>
          </div>
          <div>
            <label >Report date of case to CDC (MM/DD/YYYY):
            </label>
            <b-form-datepicker size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-model="formData1.formStatusReportDate" @input="handleInput"></b-form-datepicker>
          </div>
          <b-row class="my-1">
            <b-col sm="4">
              <label >County of residence:</label>
            </b-col>
            <b-col sm="8">
              <b-form-input  size="sm" ></b-form-input>
            </b-col>
            <b-col sm="4">
              <label >State of residence:</label>
            </b-col>
            <b-col sm="8">
              <b-form-input  size="sm" ></b-form-input>
            </b-col>
          </b-row>

        </div>
        <div class="box padding10" style="text-align: left;flex: 1">
          <t-single-select

            group_label="Ethnicity"
            group_id="Ethnicity"
            :candidates="[
              'Hispanic/Latino',
              'Non-Hispanic/ Latino',
              'Not specified',
            ]"
            v-on:input="handleInput"
          />
          <t-single-select
            v-model="formData1.formSex"
            group_label="Sex"
            group_id="Sex"
            :candidates="[
              'Male',
              'Female',
              'Unknown',
              'Other',
            ]"
            v-on:input="handleInput"
          />

        </div>
        <div class="box padding10" style="text-align: left;flex: 1">
          <b-form-group label="Date of first positive specimen:">
            <div>
              <label >collection (MM/DD/YYYY):</label>
              <b-form-datepicker  size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-on:input="handleInput" v-model="formData1.formPostitiveSpecimen"></b-form-datepicker>
            </div>
            <div style="display: flex;justify-content: space-around">
              <b-form-radio name="ethnicity" value="A">Unknown</b-form-radio>
              <b-form-radio name="ethnicity" value="A">N/A</b-form-radio>
            </div>
          </b-form-group>
          <t-single-select
            v-model="formData1.formPneumonia"
            group_label="Did the patient develop pneumonia?"
            group_id="formPneumonia"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />

          <t-single-select
            v-model="formData1.formAcuteRespDSyn"
            group_label="Did the patient have acute respiratory distress syndrome?"
            group_id="formAcuteRespDSyn"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />
          <t-single-select
            v-model="formData1.formEtiology"
            group_label="Did the patient have another diagnosis/etiology for their illness?"
            group_id="formEtiology"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />

          <t-single-select
            v-model="formData1.formAbnormalXRay"
            group_label="Did the patient have an abnormal chest X-ray?"
            group_id="formAbnormalXRay"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />


        </div>
        <div class="box padding10" style="text-align: left;flex: 1">
          <t-single-select
            v-model="formData1.formHospitalized"
            group_label="Was the patient hospitalized? "
            group_id="formHospitalized"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />
          <label >If yes, adminssion date 1</label>
          <b-form-datepicker  size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-model="formData1.formHospitalizedAdmision" @input="handleInput"></b-form-datepicker>

          <label >If yes, discharge date 1</label>
          <b-form-datepicker  size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-model="formData1.formHospitalizedExit" @input="handleInput"></b-form-datepicker>


          <t-single-select
            v-model="formData1.formICU"
            group_label="Was the patient admitted to an intensive care unit (ICU)?"
            group_id="formICU"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />

          <t-single-select
            v-model="formData1.formMV"
            group_label="Did the patient receive mechanical ventilation (MV)/intubation?"
            group_id="formMV"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />
          <div style="display: flex;flex-wrap: wrap">
            <label >If yes, total days with MV (days) </label>
            <b-form-input type="number" size="sm" ></b-form-input>
          </div>

          <t-single-select
            v-model="formData1.formECMO"
            group_label="Did the patient receive ECMO?"
            group_id="formECMO"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />

          <t-single-select
            v-model="formData1.formDeath"
            group_label="Did the patient die as a result of this illness?"
            group_id="formDeath"
            :candidates="[
              'Yes',
              'No',
              'Unknown',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around'}"
          />

          <div v-if="!formData1.formDeathDateUnknown">
            <label >Date of death</label>
            <b-form-datepicker  size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-model="formData1.formDeathDate" @input="handleInput"></b-form-datepicker>
          </div>
          <b-form-checkbox
            v-model="formData1.formDeathDateUnknown"
            value="accepted"
            @input="handleInput"
          >
            Unknown date of death
          </b-form-checkbox>
        </div>
      </div>
      <div style="display: flex;width: 100%">
        <div class="box padding10" style="text-align: left;flex: 1">
          <t-single-select
            v-model="formData1.formRace"
            group_label="Race (check all that apply):"
            group_id="formRace"
            :candidates="[
              'Asian',
              'American Indian/Alaska Native',
              'Black',
              'Native Hawaiian/Other Pacific',
              'Other',
              'Unknow',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around','flex-wrap':'wrap'}"
            :_cStyle="{'width':'50%'}"
          />
          <b-form-group label="Race (check all that apply): " v-if="![
              'Asian',
              'American Indian / Alaska Native',
              'Black',
              'Native Hawaiian / Other Pacific',
              'Other',
            ].includes(formData1.formRace)">
            <b-row>
              <b-col sm="4">
                <label>specify:</label>
              </b-col>
              <b-col sm="8">
                <b-form-input v-model="formData1.formRace" size="sm" ></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>
        </div>
        <div class="box padding10" style="text-align: left;flex: 1">
          <div>
            <label >Date of birth (MM/DD/YYYY):</label>
            <b-form-datepicker  size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }"></b-form-datepicker>
            <b-row>
              <b-col sm="4">
                <label >Age:</label>
              </b-col>
              <b-col sm="8">
                <b-form-input  size="sm" v-model="formData1.formAge"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <label >Age units(yr/mo/day): </label>
              </b-col>
              <b-col sm="8">
                <b-form-input  size="sm" ></b-form-input>
              </b-col>
            </b-row>
          </div>
        </div>
        <div style="flex: 1">
          <div class="box padding10" style="text-align: left;flex: 1">
            <p>Symptoms present</p>
            <t-single-select
              v-model="formData1.formSymptomsPresent"
              group_label="during course of illness:"
              group_id="formSymptomsPresent"
              :candidates="[
              'Symptomatic',
              'Asymptomatic',
              'Unknown',
            ]"
              v-on:input="handleInput"
            />
          </div>
          <div class="box padding10" style="text-align: left;flex: 1">
            <div >
              <label >If symptomatic, onset date (MM/DD/YYYY):</label>
              <b-form-datepicker id="example-datepicker1" size="sm" class="mb-2" v-if="!formData1.formSymptomEndStatus" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-model="formData1.formSymptomDate" @input="handleInput"></b-form-datepicker>
            </div>

            <b-form-group>
              <b-checkbox name="form-state" v-model="formData1.formSymptomEndStatus">Unknown</b-checkbox>
            </b-form-group>
          </div>
        </div>
        <div class="box padding10" style="text-align: left;flex: 1">
          <label>If symptomatic, date of symptom resolution (MM/DD/YYYY):</label>
          <b-form-datepicker size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-model="formData1.formSymtomDateEnd" @input="handleInput"></b-form-datepicker>
          <t-single-select
            v-model="formData1.formSymtomDateEnd"

            group_id="formSymtomDateEnd"
            :candidates="[
              'Still symptomatic',
              'Unknown symptom status',
              'Symptoms resolved, unknown date',
            ]"
            v-on:input="handleInput"
          />
        </div>
      </div>
      <div style="display: flex;width: 100%">
        <div class="box padding10" style="text-align: left;flex: 1">
          <t-single-select
            v-model="formData1.formHealthCareWorker"
            group_label="Is the patient a health care worker in the United States?"
            group_id="formHealthCareWorker"
            :candidates="[
              'Yes',
              'No',
              'Unknonw',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around','flex-wrap':'wrap'}"
          />

          <t-single-select
            v-model="formData1.formPrevHealthCareWorker"
            group_label="Does the patient have a history of being in a healthcare facility (as a patient, worker or visitor) in China?"
            group_id="formHealthCareWorker"
            :candidates="[
              'Yes',
              'No',
              'Unknonw',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around','flex-wrap':'wrap'}"
          />

          <b-form-group label="In the 14 days prior to illness onset, did the patient have any of the following exposures (check all that apply):">
            <div style="display: flex;justify-content: space-around">
              <div style="flex: 1">
                <b-form-radio name="formLastTwoWeeksExposure" value="Travel to Wuhan" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Travel to Wuhan</b-form-radio>
                <b-form-radio name="formLastTwoWeeksExposure" value="Travel to Hubei" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Travel to Hubei </b-form-radio>
                <b-form-radio name="formLastTwoWeeksExposure" value="Travel to mainland China" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Travel to mainland China </b-form-radio>
                <div style="display: flex">
                  <b-form-radio name="formLastTwoWeeksExposure" value="Travel to other non-US country" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Travel to other non-US country  </b-form-radio>
                  <label style="padding-left: 5px">specify:</label>
                  <b-form-input  size="sm" ></b-form-input>
                </div>
                <b-form-radio name="formLastTwoWeeksExposure" value="Household contact with another lab-confirmed COVID-19 case-patient" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Household contact with another lab-confirmed COVID-19 case-patient </b-form-radio>
              </div>
              <div style="flex: 1">
                <b-form-radio name="formLastTwoWeeksExposure" value="Community contact with another ab-confirmed COVID-19 case-patient" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Community contact with another ab-confirmed COVID-19 case-patient</b-form-radio>
                <b-form-radio name="formLastTwoWeeksExposure" value="Any healthcare contact with another lab-confirmed COVID-19 case-patient" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Any healthcare contact with another lab-confirmed COVID-19 case-patient</b-form-radio>
                <b-form-radio name="formLastTwoWeeksExposure" value="Patient" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Patient</b-form-radio>
                <b-form-radio name="formLastTwoWeeksExposure" value="Visitor" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Visitor</b-form-radio>

                <b-form-radio name="formLastTwoWeeksExposure" value="HCW" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">HCW</b-form-radio>
                <b-form-radio name="formLastTwoWeeksExposure" value="Animal exposure" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput">Animal exposure</b-form-radio>
              </div>
              <div style="flex: 1">
                <b-form-radio name="formLastTwoWeeksExposure" v-model="formData1.formLastTwoWeeksExposure" @input="handleInput" value="Exposure to a cluster of patients with severe acute lower respiratory distress of unknown etiology">Exposure to a cluster of patients with severe acute lower respiratory distress of unknown etiology
                </b-form-radio>
                <b-form-radio v-model="formData1.formLastTwoWeeksExposure" @input="handleInput" name="formLastTwoWeeksExposure" value="Travel to Hubei">Travel to Hubei </b-form-radio>
               <div style="display: flex">
                 <b-form-radio v-model="formData1.formLastTwoWeeksExposure" @input="handleInput" name="formLastTwoWeeksExposure" value="Other">Other </b-form-radio>
                 <label style="padding-left: 5px">specify:</label>
                 <b-form-input  size="sm" ></b-form-input>
               </div>
              </div>

            </div>
          </b-form-group>
        </div>
      </div>
      <div style="display: flex;width: 100%">
        <div class="box padding10" style="text-align: left;flex: 1">
          <b-form-group label="Under what process was the PUI or case first identified? (check all that apply):">
          <div style="">
            <div style="display: flex;justify-content: space-around">
              <b-form-radio v-model="formData1.formIdentificationType" @input="handleInput" name="formIdentificationType" value="Clinical evaluation leading to PUI determination">Clinical evaluation leading to PUI determination</b-form-radio>
              <b-form-radio v-model="formData1.formIdentificationType" @input="handleInput" name="formIdentificationType" value="Contact tracing of case patient">Contact tracing of case patient</b-form-radio>
              <b-form-radio v-model="formData1.formIdentificationType" @input="handleInput" name="formIdentificationType" value="Routine surveillance">Routine surveillance</b-form-radio>
              <div style="display: flex">
                <b-form-radio v-model="formData1.formIdentificationType" @input="handleInput" name="formIdentificationType" value="EpiX notification of travelers; if checked, DGMQID">EpiX notification of travelers; if checked, DGMQID </b-form-radio>
                <b-form-input  size="sm" ></b-form-input>
              </div>

            </div>
            <div style="display: flex;justify-content: space-around">
              <b-form-radio name="ethnicity" value="A">Unknown</b-form-radio>
              <div style="display: flex">
                <b-form-radio v-model="formData1.formIdentificationType" @input="handleInput" name="formIdentificationType" value="Other">Other, specify:</b-form-radio>
                <b-form-input  size="sm" v-model="formData1.formIdentificationTypeOther" @input="handleInput"></b-form-input>
              </div>
            </div>

          </div>
        </b-form-group>

        </div>
      </div>

      <div style="display: flex;margin-top: 20px" >
        <div>Collected from (check all that apply):</div>
        <b-form-radio name="form-state" value="A">Yes</b-form-radio>
        <b-form-radio name="form-state" value="B">No</b-form-radio>
        <b-form-radio name="form-state" value="B">Unk</b-form-radio>
      </div>
      <div style="margin-top: 10px;text-align: left">
        <div style="display: flex; border: solid 1px gray">
          <div style="width: 60%;border: solid 1px gray">
            <strong>During this illness, did the patient experience any of the following symptoms?</strong>
          </div>
          <div style="width: 40%;border: solid 1px gray">
            <strong>Symptom Present?</strong>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Fever >100.4F (38C)c
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.symFever" @input="handleInput" name="symFever" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.symFever" @input="handleInput" name="symFever" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.symFever" @input="handleInput" name="symFever" value="Unk">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Subjective fever (felt feverish)
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.symSubFever" @input="handleInput" name="symSubFever" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.symSubFever" @input="handleInput" name="symSubFever" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.symSubFever" @input="handleInput" name="symSubFever" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Chills
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.symChills" @input="handleInput" name="symChills" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.symChills" name="symChills" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.symChills" name="symChills" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Muscle aches (myalgia)
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.symMuscleAches" @input="handleInput" name="symMuscleAches" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.symMuscleAches" @input="handleInput" name="symMuscleAches" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.symMuscleAches" @input="handleInput" name="symMuscleAches" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Runny nose (rhinorrhea)
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.symRunnyNose" @input="handleInput" name="symRunnyNose" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.symRunnyNose" @input="handleInput" name="symRunnyNose" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.symRunnyNose" @input="handleInput" name="symRunnyNose" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Sore throat
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.symSoreThroat" @input="handleInput" name="symSoreThroat" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.symSoreThroat" @input="handleInput" name="symSoreThroat" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.symSoreThroat" @input="handleInput" name="symSoreThroat" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Cough (new onset or worsening of chronic cough)
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.symCough" @input="handleInput" name="symCough" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.symCough" @input="handleInput" name="symCough" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.symCough" @input="handleInput" name="symCough" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Shortness of breath (dyspnea)
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.symShortBreath" @input="handleInput" name="symShortBreath" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.symShortBreath" @input="handleInput" name="symShortBreath" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.symShortBreath" @input="handleInput" name="symShortBreath" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Nausea or vomiting
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form" value="Yes">Yes</b-form-radio>
                <b-form-radio name="form" value="No">No</b-form-radio>
                <b-form-radio name="form" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Headache
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form" value="Yes">Yes</b-form-radio>
                <b-form-radio name="form" value="No">No</b-form-radio>
                <b-form-radio name="form" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Abdominal pain
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form" value="Yes">Yes</b-form-radio>
                <b-form-radio name="form" value="No">No</b-form-radio>
                <b-form-radio name="form" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="display: flex;">
          <div style="width: 60%;border: solid 1px gray;" class="box">
            Diarrhea (≥3 loose/looser than normal stools/24hr period)
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form" value="Yes">Yes</b-form-radio>
                <b-form-radio name="form" value="No">No</b-form-radio>
                <b-form-radio name="form" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="border: solid 1px gray;display: flex" class="box">
          <label style="text-align: right" for="input-small">Other, specify:</label>
          <b-form-input id="input-small" size="sm" style="flex: 1" ></b-form-input>
        </div>

      </div>

      <div style="display: flex;margin-top: 20px" >
        <div>Pre-existing medical conditions?</div>
        <b-form-radio name="form-state" value="A">Yes</b-form-radio>
        <b-form-radio name="form-state" value="B">No</b-form-radio>
        <b-form-radio name="form-state" value="B">Unk</b-form-radio>
      </div>
      <div style="margin-top: 10px;text-align: left">
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Chronic Lung Disease (asthma/emphysema/COPD)
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Diabetes Mellitus
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Cardiovascular disease
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Chronic Renal disease
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Chronic Liver disease
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Immunocompromised Condition
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Neurologic/neurodevelopmental/intellectual
            disability
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <div style="display: flex" class="">
              <label style="text-align: right" for="input-small">(If YES, specify)</label>
              <b-form-input id="input-small" size="sm" style="flex: 1" ></b-form-input>
            </div>
          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Other chronic diseases
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <div style="display: flex" class="">
              <label style="text-align: right" for="input-small">(If YES, specify)</label>
              <b-form-input id="input-small" size="sm" style="flex: 1" ></b-form-input>
            </div>
          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            If female, currently pregnant
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Current smoker
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Former smoker
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio name="form-state" value="A">Yes</b-form-radio>
                <b-form-radio name="form-state" value="B">No</b-form-radio>
                <b-form-radio name="form-state" value="B">Unk</b-form-radio>
              </div>

            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">

          </div>
        </div>
      </div>
      <div style="display: flex;margin-top: 20px">
        <div style="flex: 1;margin-right: 10px">
          <div style="display: flex;">
            <div style="flex: 1" class="box">Test</div>
            <div class="box" style="width: 42px">Pos</div>
            <div class="box" style="width: 42px">Neg</div>
            <div class="box" style="width: 42px">Pend</div>
            <div class="box" style="width: 42px">Not done</div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Influenza rapid Ag</div> <b-form-radio name="ethnicity" value="A">A</b-form-radio>  <b-form-radio name="ethnicity" value="A">B</b-form-radio>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Influenza PCR </div> <b-form-radio name="ethnicity" value="A">A</b-form-radio>  <b-form-radio name="ethnicity" value="A">B</b-form-radio>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">RSV</div>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">H. metapneumovirus</div>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Parainfluenza (1-4)</div>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Adenovirus </div>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Rhinovirus/enterovirus</div>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Coronavirus (OC43, 229E,
                  HKU1, NL63)
                </div>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">M. pneumoniae</div>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">C. pneumoniae
                </div>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
          <div style="display: flex;">
            <div style="flex: 1" class="box">
              <div style="display: flex;">
                <div style="white-space: nowrap">Other, Specify:</div>
                <b-form-input size="sm" ></b-form-input>
              </div>
            </div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
            <div class="box" style="width: 42px"><b-form-radio name="ethnicity" value="A"></b-form-radio></div>
          </div>
        </div>
        <div style="flex: 1">
          <div style="display: flex;">
            <div style="flex: 1"  class="box">Specimen Type</div>
            <div style="width: 84px" class="box">Specimen ID</div>
            <div style="width: 84px" class="box">Date Collected</div>
            <div style="width: 84px" class="box">State Lab Tested</div>
            <div style="width: 84px" class="box">State Lab Result</div>
            <div style="width: 84px" class="box">Sent to CDC</div>
            <div style="width: 84px" class="box">CDC Lab Result</div>
          </div>
          <div style="display: flex; " class="box">
            <div style="flex: 1;border-right: solid 1px gray;" class="">NP Swab
            </div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class="">
              <b-form-radio name="ethnicity" value="A"></b-form-radio>
            </div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class="">
              <b-form-radio name="ethnicity" value="A"></b-form-radio>
            </div>
            <div style="width: 84px" class=""></div>
          </div>
          <div style="display: flex; " class="box">
            <div style="flex: 1;border-right: solid 1px gray;" class="">OP Swab</div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class="">
              <b-form-radio name="ethnicity" value="A"></b-form-radio>
            </div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class="">
              <b-form-radio name="ethnicity" value="A"></b-form-radio>
            </div>
            <div style="width: 84px" class=""></div>
          </div>
          <div style="display: flex; " class="box">
            <div style="flex: 1;border-right: solid 1px gray;" class="">Sputum</div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class="">
              <b-form-radio name="ethnicity" value="A"></b-form-radio>
            </div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class="">
              <b-form-radio name="ethnicity" value="A"></b-form-radio>
            </div>
            <div style="width: 84px" class=""></div>
          </div>
          <div style="display: flex; " class="box">
            <div style="flex: 1;border-right: solid 1px gray;" class="">
              <div style="display: flex;flex-wrap: wrap">
                <div name="ethnicity" value="A">Other, specify:</div>
                <b-form-input  size="sm" ></b-form-input>
              </div>
            </div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class="">

            </div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class=""></div>
            <div style="width: 84px" class="">
            </div>
            <div style="width: 84px" class=""></div>
          </div>
        </div>
      </div>
    </b-form>
  </b-container>
</template>
<script>
  import tSingleSelect from "./tSingleSelect";
export default {
  components:{tSingleSelect},
  props:{
    formData:{
      type:Object,
      default:{}
    },
  },
  created() {
    console.log(this.formData)
  },
  data(){
    return{
      formData1: this.formData,
    }
  },
  methods:{
    handleInput(){
      this.$emit('input', this.formData1)
      console.log('On parent:',this.formData1.formPneumonia)
    },
    onSubmit(){

    },
    onReset(){

    }
  }

}
</script>
<style>
  .box{
    border: solid 1px gray;


  }
  .padding10{
    padding: 10px;
  }
</style>
