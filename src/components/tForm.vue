<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="formData1" >
      <h3>Patient information</h3>
      <div style="display: flex">
        <label style="padding:0 5px;white-space: nowrap">Name: </label>
        <b-form-input v-model="formData1.formPatName" @input="handleInput" size="sm" ></b-form-input>
        <label style="padding:0 5px;white-space: nowrap">Phone: </label>
        <b-form-input v-model="formData1.formPatNumber" @input="handleInput" size="sm" ></b-form-input>
      </div>
      <h3>Interviewer information</h3>
      <div style="display: flex">
        <label style="padding:0 5px;white-space: nowrap">Name of interviewer: Last </label>
        <b-form-input v-model="formData1.formILast" @input="handleInput" size="sm" ></b-form-input>
        <label style="padding-left: 5px">First </label>
        <b-form-input v-model="formData1.formIFirst" @input="handleInput" size="sm" ></b-form-input>
      </div>
      <div style="display: flex">
        <label style="padding-left: 5px">Affiliation/Organization: </label>
        <b-form-input  size="sm" v-model="formData1.formIOrganization" @input="handleInput" ></b-form-input>
        <label style="padding-left: 5px">Telephone </label>
        <b-form-input  size="sm" v-model="formData1.formIPhone" @input="handleInput"></b-form-input>
        <label style="padding-left: 5px">Email </label>
        <b-form-input  size="sm" type="email" v-model="formData1.formIEmail" @input="handleInput" ></b-form-input>
      </div>
      <h3>Basic information</h3>
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
              'Presumptive case (positive local test), confirmatory testing pending',
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
              'White',
              'Unknown',
              'Other',
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
            group_id="formPrevHealthCareWorker"
            :candidates="[
              'Yes',
              'No',
              'Unknonw',
            ]"
            v-on:input="handleInput"
            :_style="{display:'flex','justify-content':'space-around','flex-wrap':'wrap'}"
          />
          <t-multi-select
            v-model="formData1.formLastTwoWeeksExposure"
            group_label="In the 14 days prior to illness onset, did the patient have any of the following exposures (check all that apply):"
            group_id="formCollectedFrom"
            :candidates="[
              'Travel to Wuhan','Travel to mainland China','Travel to other non-US country','Household contact with another \n lab-confirmed COVID-19 case-patient','Community contact with another ab-confirmed COVID-19 case-patient','Any healthcare contact with another lab-confirmed COVID-19 case-patient','Patient','Visitor','HCW','Animal exposure','Exposure to a aluster of patients with severe acute lower respiratory distress of unknown etiology','Other','Unknown'
            ]"
            v-on:input="handleInput"
            :_style="{'column-count': 3}"

          />

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
            <div style="display: flex;justify-content: space-around; ">
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
      <div style="text-align: left; margin-top: 20px; width: 400px;">
        <t-single-select
          v-model="formData1.formCollectedFrom"
          group_label="Collected from (check all that apply):?"
          group_id="formCollectedFrom"
          :candidates="[
              'Patient Interview',
              'Medical record review',
            ]"
          v-on:input="handleInput"
          :_style="{'display':'flex','justify-content':'space-around'}"
        />
      </div>

      <h3>Symptoms, clinical course, past medical history and social history</h3>
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
          <label style="text-align: right" >Other, specify:</label>
          <b-form-input  size="sm" style="flex: 1" ></b-form-input>
        </div>

      </div>

      <div style="display: flex;margin-top: 20px" >
        <div>Pre-existing medical conditions?</div>
        <b-form-group >
          <div style="display: flex; justify-content: space-around" >
            <b-form-radio v-model="formData1.preExisting" @input="handleInput" name="preExisting" value="Yes">Yes</b-form-radio>
            <b-form-radio v-model="formData1.preExisting" @input="handleInput" name="preExisting" value="No">No</b-form-radio>
            <b-form-radio v-model="formData1.preExisting" @input="handleInput" name="preExisting" value="Unk">Unk</b-form-radio>
          </div>
        </b-form-group>


      </div>
      <div style="margin-top: 10px;text-align: left">
        <div style="display: flex;text-align: left">
          <div style="width: 35%;border: solid 1px gray;" class="box">
            Chronic Lung Disease (asthma/emphysema/COPD)
          </div>
          <div style="width: 25%;border: solid 1px gray" class="box">
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.preELung" @input="handleInput" name="preELung" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preELung" @input="handleInput" name="preELung" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preELung" @input="handleInput" name="preELung" value="Unk">Unk</b-form-radio>
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
                <b-form-radio v-model="formData1.preEDiabetes" @input="handleInput" name="preEDiabetes" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preEDiabetes" @input="handleInput" name="preEDiabetes" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preEDiabetes" @input="handleInput" name="preEDiabetes" value="Unk">Unk</b-form-radio>
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
                <b-form-radio v-model="formData1.preECardio" @input="handleInput" name="preECardio" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preECardio" @input="handleInput" name="preECardio" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preECardio" @input="handleInput" name="preECardio" value="Unk">Unk</b-form-radio>
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
                <b-form-radio v-model="formData1.preERenal" @input="handleInput" name="preERenal" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preERenal" @input="handleInput" name="preERenal" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preERenal" @input="handleInput" name="preERenal" value="Unk">Unk</b-form-radio>
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
                <b-form-radio v-model="formData1.preELiver" @input="handleInput" name="preELiver" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preELiver" @input="handleInput" name="preELiver" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preELiver" @input="handleInput" name="preELiver" value="Unk">Unk</b-form-radio>
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
                <b-form-radio v-model="formData1.preEImmuno" @input="handleInput" name="preEImmuno" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preEImmuno" @input="handleInput" name="preEImmuno" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preEImmuno" @input="handleInput" name="preEImmuno" value="Unk">Unk</b-form-radio>
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
                <b-form-radio v-model="formData1.preENeurological" @input="handleInput" name="preENeurological" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preENeurological" @input="handleInput" name="preENeurological" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preENeurological" @input="handleInput" name="preENeurological" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <div style="display: flex" class="">
              <label style="text-align: right" >(If YES, specify)</label>
              <b-form-input size="sm" style="flex: 1" ></b-form-input>
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
                <b-form-radio v-model="formData1.preENeurologicalOther" @input="handleInput" name="preENeurologicalOther" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preENeurologicalOther" @input="handleInput" name="preENeurologicalOther" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preENeurologicalOther" @input="handleInput" name="preENeurologicalOther" value="Unk">Unk</b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="width: 40%;border: solid 1px gray" class="box">
            <div style="display: flex" class="">
              <label style="text-align: right" >(If YES, specify)</label>
              <b-form-input  size="sm" style="flex: 1" ></b-form-input>
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
                <b-form-radio v-model="formData1.preEPregnant" @input="handleInput" name="preEPregnant" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preEPregnant" @input="handleInput" name="preEPregnant" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preEPregnant" @input="handleInput" name="preEPregnant" value="Unk">Unk</b-form-radio>
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
                <b-form-radio v-model="formData1.preECurSmoker" @input="handleInput" name="preECurSmoker" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preECurSmoker" @input="handleInput" name="preECurSmoker" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preECurSmoker" @input="handleInput" name="preECurSmoker" value="Unk">Unk</b-form-radio>
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
                <b-form-radio v-model="formData1.preEPreSmoker" @input="handleInput" name="preEPreSmoker" value="Yes">Yes</b-form-radio>
                <b-form-radio v-model="formData1.preEPreSmoker" @input="handleInput" name="preEPreSmoker" value="No">No</b-form-radio>
                <b-form-radio v-model="formData1.preEPreSmoker" @input="handleInput" name="preEPreSmoker" value="Unk">Unk</b-form-radio>
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
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Influenza rapid Ag</div> <b-form-radio name="ethnicity" value="A">A</b-form-radio>  <b-form-radio name="ethnicity" value="A">B</b-form-radio>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio class="box" v-model="formData1.testInfluAG" @input="handleInput" name="testInfluAG" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio class="box" v-model="formData1.testInfluAG" @input="handleInput" name="testInfluAG" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio class="box" v-model="formData1.testInfluAG" @input="handleInput" name="testInfluAG" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio class="box" v-model="formData1.testInfluAG" @input="handleInput" name="testInfluAG" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Influenza PCR </div> <b-form-radio name="ethnicity" value="A">A</b-form-radio>  <b-form-radio name="ethnicity" value="A">B</b-form-radio>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testInfluPCR" @input="handleInput" name="testInfluPCR" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testInfluPCR" @input="handleInput" name="testInfluPCR" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testInfluPCR" @input="handleInput" name="testInfluPCR" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testInfluPCR" @input="handleInput" name="testInfluPCR" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">RSV</div>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testRSV" @input="handleInput" name="testRSV" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testRSV" @input="handleInput" name="testRSV" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testRSV" @input="handleInput" name="testRSV" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testRSV" @input="handleInput" name="testRSV" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">H. metapneumovirus</div>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testHmetapneu" @input="handleInput" name="testHmetapneu" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testHmetapneu" @input="handleInput" name="testHmetapneu" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testHmetapneu" @input="handleInput" name="testHmetapneu" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testHmetapneu" @input="handleInput" name="testHmetapneu" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Parainfluenza (1-4)</div>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testParaInflu" @input="handleInput" name="testParaInflu" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testParaInflu" @input="handleInput" name="testParaInflu" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testParaInflu" @input="handleInput" name="testParaInflu" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testParaInflu" @input="handleInput" name="testParaInflu" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Adenovirus </div>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testAdenovirus" @input="handleInput" name="testAdenovirus" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testAdenovirus" @input="handleInput" name="testAdenovirus" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testAdenovirus" @input="handleInput" name="testAdenovirus" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testAdenovirus" @input="handleInput" name="testAdenovirus" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Rhinovirus/enterovirus</div>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testRhinovirus" @input="handleInput" name="testRhinovirus" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testRhinovirus" @input="handleInput" name="testRhinovirus" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testRhinovirus" @input="handleInput" name="testRhinovirus" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testRhinovirus" @input="handleInput" name="testRhinovirus" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">Coronavirus (OC43, 229E,
                  HKU1, NL63)
                </div>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testCoronavirus" @input="handleInput" name="testCoronavirus" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testCoronavirus" @input="handleInput" name="testCoronavirus" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testCoronavirus" @input="handleInput" name="testCoronavirus" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testCoronavirus" @input="handleInput" name="testCoronavirus" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">M. pneumoniae</div>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testMpneumoniae" @input="handleInput" name="testMpneumoniae" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testMpneumoniae" @input="handleInput" name="testMpneumoniae" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testMpneumoniae" @input="handleInput" name="testMpneumoniae" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testMpneumoniae" @input="handleInput" name="testMpneumoniae" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex; flex-wrap: wrap">
                <div style="white-space: nowrap">C. pneumoniae
                </div>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testCpneumoniae" @input="handleInput" name="testCpneumoniae" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testCpneumoniae" @input="handleInput" name="testCpneumoniae" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testCpneumoniae" @input="handleInput" name="testCpneumoniae" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testCpneumoniae" @input="handleInput" name="testCpneumoniae" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
          <div style="display: flex; height: 25px;">
            <div style="flex: 1" class="box">
              <div style="display: flex;">
                <div style="white-space: nowrap">Other, Specify:</div>
                <b-form-input size="sm" ></b-form-input>
              </div>
            </div>
            <b-form-group >
              <div style="display: flex; justify-content: space-around" >
                <b-form-radio v-model="formData1.testOther" @input="handleInput" name="testOther" value="Pos" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testOther" @input="handleInput" name="testOther" value="Neg" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testOther" @input="handleInput" name="testOther" value="Pend" style="width: 42px; border: solid 1px gray;"></b-form-radio>
                <b-form-radio v-model="formData1.testOther" @input="handleInput" name="testOther" value="Not done" style="width: 42px; border: solid 1px gray;"></b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
        <div style="flex: 1">
          <div style="display: flex;">
            <div style="flex: 1; width: 80px;"  class="box">Specimen Type</div>
            <div style="width: 84px" class="box">Specimen ID</div>
            <div style="width: 120px" class="box">Date Collected</div>
            <div style="width: 74px" class="box">State Lab Tested</div>
            <div style="width: 74px" class="box">State Lab Result</div>
            <div style="width: 54px" class="box">Sent to CDC</div>
            <div style="width: 84px" class="box">CDC Lab Result</div>
          </div>
          <div style="display: flex; " class="box">
            <div style="flex: 1;border-right: solid 1px gray; width: 80px;" class="">NP Swab
            </div>
            <div style="width: 84px; padding-left: 5px; padding-right: 5px;" class="">
              <b-form-input v-model="formData1.specNPSwabID" size="sm" ></b-form-input>
            </div>
            <div style="width: 120px; padding-left: 5px; padding-right: 5px;" class="">
              <b-form-datepicker  size="sm" class="mb-2" :date-format-options="{ month: 'numeric', day: 'numeric',year: 'numeric' }" v-on:input="handleInput" v-model="formData1.specNPSwabDate"></b-form-datepicker>
            </div>
            <div style="width: 74px; padding-left: 5px; padding-right: 5px;" class="">
              <b-form-input v-model="formData1.specLabTest" size="sm" ></b-form-input>
            </div>
            <div style="width: 74px; padding-left: 5px; padding-right: 5px;" class="">
              <b-form-input v-model="formData1.specLabTestresult" size="sm" ></b-form-input>
            </div>
            <div style="width: 54px; padding-left: 5px; padding-right: 5px;" class="">
              <b-form-checkbox v-model="formData1.specSendCDC" name="specSendCDC" value="Sent to CDC"></b-form-checkbox>
            </div>
            <div style="width: 84px; padding-left: 5px; padding-right: 5px;" class="">
              <b-form-input v-model="formData1.specCDCResults" size="sm" ></b-form-input>
            </div>
          </div>
          <div style="display: flex; " class="box">
            <div style="flex: 1;border-right: solid 1px gray;width: 80px;" class="">OP Swab</div>
            <div style="width: 84px" class=""></div>
            <div style="width: 120px" class="">
              <b-form-radio name="ethnicity2" value="A"></b-form-radio>
            </div>
            <div style="width: 74px" class=""></div>
            <div style="width: 74px" class=""></div>
            <div style="width: 54px" class="">
              <b-form-radio name="ethnicity3" value="A"></b-form-radio>
            </div>
            <div style="width: 84px" class=""></div>
          </div>
          <div style="display: flex; " class="box">
            <div style="flex: 1;border-right: solid 1px gray;width: 80px;" class="">Sputum</div>
            <div style="width: 84px" class=""></div>
            <div style="width: 120px" class="">
              <b-form-check name="ethnicity4" value="A"></b-form-check>
            </div>
            <div style="width: 74px" class=""></div>
            <div style="width: 74px" class=""></div>
            <div style="width: 54px" class="">
              <b-form-radio name="ethnicity5" value="A"></b-form-radio>
            </div>
            <div style="width: 84px" class=""></div>
          </div>
          <div style="display: flex; " class="box">
            <div style="flex: 1;border-right: solid 1px gray; width: 80px;" class="">
              <div style="display: flex;flex-wrap: wrap">
                <div name="ethnicity6" value="A">Other, specify:</div>
                <b-form-input  size="sm" ></b-form-input>
              </div>
            </div>
            <div style="width: 84px" class=""></div>
            <div style="width: 120px" class="">

            </div>
            <div style="width: 74px" class=""></div>
            <div style="width: 74px" class=""></div>
            <div style="width: 54px" class="">
            </div>
            <div style="width: 84px" class=""></div>
          </div>
          <div style="display: flex; height: 50px;"></div>
          <t-input-dyamic-array v-model="formData1.contactnames" @input="handleInput"/>
        </div>
      </div>
    </b-form>
  </b-container>
</template>
<script>
  import tSingleSelect from "./tSingleSelect";
  import tMultiSelect from "./tMultiSelect";
  import TInputDyamicArray from "./tInputDyamicArray";
export default {
  components:{TInputDyamicArray, tSingleSelect,tMultiSelect},
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
      isAdd:false,
      html:''
    }
  },
  methods:{
    handleInput(){
      this.$emit('input', this.formData1)
      //console.log('On parent:',this.formData1)
    },
    onSubmit(){

    },
    onReset(){

    },
    addelement(){

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
  label{
    padding: 0 5px;
    margin: auto;
  }
  h3{
    color: cornflowerblue;
    text-align: left;
  }
  .form-control{
    border: 0!important;
    border-bottom: solid 1px black!important;
    border-radius: 0!important;
  }
</style>
