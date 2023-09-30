import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

export function itemTemplate(school) {
  return (
    <div className="col-12">
      <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{school.name}</div>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">{"category"}</span>
              </span>
              <Tag value={"aaaaa"}></Tag>
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <span className="text-2xl font-semibold">${school.name}</span>
            <Button icon="pi pi-shopping-cart" className="p-button-rounded" ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
