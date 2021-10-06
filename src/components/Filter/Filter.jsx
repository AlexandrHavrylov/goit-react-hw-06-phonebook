import { Input, Label } from "styles/Form.styled";
import React from "react";
import { Section } from "styles/App.styled";
import { connect } from "react-redux";
import { changeFilter } from "redux/contacts/contacts-actions";

const Filter = ({ value, onFilterChange }) => (
  <Section>
    <Label>
      Find contatcs by Name
      <Input type="text" value={value} onChange={onFilterChange} />
    </Label>
  </Section>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (e) => dispatch(changeFilter(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
