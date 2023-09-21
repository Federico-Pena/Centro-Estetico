import './Loader.scss'

export const LoaderChico = ({ className }) => {
	return <span className={`loaderChico ${className ? className : ''}`}></span>
}
