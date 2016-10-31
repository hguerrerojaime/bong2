export abstract class DataType<N,J> {

	private _nativeValue:N;

	public set nativeValue(_nativeValue:N) {
		this._nativeValue = _nativeValue;
	}

	public get nativeValue():N {
		return this._nativeValue;
	}

	abstract json():J;

}