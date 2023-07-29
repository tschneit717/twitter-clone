export interface FormProps extends React.PropsWithChildren<{}> {
  onSubmit: (event: HTMLFormControlsCollection) => void;
}