import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import "../../i18n";
import { useTranslation } from "react-i18next";

export function itemTemplate(school) {
  const { t, i18n } = useTranslation();

  return (
    <div className="col-12">
      <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">
              {school.institutions.institution}
            </div>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <span className="font-semibold">
                  {t(school.level.replace("_", " "))}
                </span>
              </span>
              {school.run_form ? <Tag value={t("niestacjonarne")}></Tag> : <Tag value={t("stacjonarne")}></Tag>}
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <span className="text-2xl font-semibold">
              {school.study_names.name}
            </span>
            <Button className="p-button-rounded  ">
              {t("lang")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
